import { useForm, type SubmitHandler } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Input from "../../components/form/Input";
import Checkbox from "../../components/form/Checkbox";
import { SimpleLink } from "../../components/ui/Link";
import { SubTitle, Text, Title } from "../../components/ui/Typography";
import { Button } from "../../components/ui/Button";

interface Inputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const [isRememberMeActivated, setIsRememberMeActivated] = useState(false);

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
        <div className="space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <Title level={4}>Welcome back</Title>
            <SubTitle>Sign in to continue building habits</SubTitle>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
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
            </div>

            <div className="flex justify-between items-center text-sm">
              <Checkbox
                label="Remember me"
                checked={isRememberMeActivated}
                onChange={setIsRememberMeActivated}
              />
              <SimpleLink link="/forget-password">Forget Password?</SimpleLink>
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
                Don't have an account?
              </span>
              <SimpleLink link="/sign-up" underline>
                Sign up
              </SimpleLink>
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
