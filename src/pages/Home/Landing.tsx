import { ArrowRight } from "lucide-react";
import Page from "../../components/ui/Page";
import { SubTitle, Text, Title } from "../../components/ui/Typography";
import { CustomLink } from "../../components/ui/Link";

const Landing = () => {
  return (
    <Page title="Home">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Content */}
        <div className="space-y-12">
          <div className="space-y-8">
            <Title>Sano Paila</Title>
            <Title level={2} color="text-gray-400">
              One Step at a time
            </Title>
            <SubTitle>
              The Journey of the thousand miles, begins with a single step
            </SubTitle>
          </div>

          {/* CTA */}
          <div className="space-y-6">
            <CustomLink link="/sign-up">
              Start tracking
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </CustomLink>

            <Text>Free forever</Text>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Landing;
