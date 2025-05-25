import { Title, SubTitle, Text } from "../../components/ui/Typography";

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <Title level={3}>Dashboard</Title>
        <SubTitle>Welcome back, "User" 👋</SubTitle>
        <Text>
          This is your personalized dashboard. From here, you can track your
          habits, update your profile, and much more.
        </Text>
      </div>
    </div>
  );
};

export default DashboardPage;
