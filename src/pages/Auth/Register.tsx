import { ArrowRight } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { SubTitle, Text, Title } from "../../components/ui/Typography";
import Input from "../../components/form/Input";
import { Button } from "../../components/ui/Button";
import { SimpleLink } from "../../components/ui/Link";

interface Inputs {
  full_name: string;
  email: string;
  password: string;
  confirm_password: string;
}

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-sm mx-auto w-full">
        <div className="space-y-5">
          {/* Header */}
          <div className="text-center space-y-4">
            <Title level={4}>Get Started</Title>
            <SubTitle>Create your account to begin</SubTitle>
          </div>

          {/* Form */}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <Input
                placeholder="Full Name"
                type="text"
                register={register("full_name")}
              />
              <Input
                placeholder="Email"
                type="email"
                register={register("email")}
              />
              <Input
                placeholder="Password"
                type="password"
                register={register("password")}
              />
              <Input
                placeholder="Confirm Password"
                type="password"
                register={register("confirm_password")}
              />
            </div>

            <Button disabled={isSubmitting} type="submit">
              Sign in
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </form>

          {/* Footer */}
          <div className="text-center">
            <Text level={5}>
              <span className="text-gray-400 font-light pr-2">
                Already have an account?
              </span>
              <SimpleLink link="/sign-up" underline>
                Sign in
              </SimpleLink>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
