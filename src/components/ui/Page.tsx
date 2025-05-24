import { Helmet } from "react-helmet";

type PageProps = {
  title: string;
  description?: string;
  pageTitle?: string;
  children?: React.ReactNode;
};
const Page = ({ title, description, pageTitle, children }: PageProps) => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <Helmet>
        <title>{title} | Sano paila</title>
        <meta name="description" content={description} />
      </Helmet>

      <h1>{pageTitle}</h1>
      {children}
    </div>
  );
};

export default Page;
