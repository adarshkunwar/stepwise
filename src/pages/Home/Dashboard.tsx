import { useSelector } from "react-redux";
import { CustomLink } from "../../components/ui/Link";
import { Title, SubTitle, Text } from "../../components/ui/Typography";
import type { RootState } from "../../stores/store";
import Page from "../../components/ui/Page";

const DashboardPage = () => {
  const { hasProfile } = useSelector((state: RootState) => state.auth);

  return !hasProfile ? (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <Title level={3}>Dashboard</Title>
        <SubTitle>Welcome "User" 👋</SubTitle>
        <Text>
          This is your personalized dashboard. From here, you can track your
          habits, update your profile, and much more.
        </Text>
        <Text>It seems you do not have an profile yet.</Text>
        <div className="flex justify-center">
          <div>
            <CustomLink link="/create-user">Create User</CustomLink>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
      <Page pageTitle="Dashboard">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Title level={3}>Dashboard</Title>
            <SubTitle>Welcome "User" 👋</SubTitle>
          </div>
        </div>
      </Page>
    </>
  );
};

export default DashboardPage;
