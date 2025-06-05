import { Helmet } from "react-helmet";

type PageProps = {
  description?: string;
  pageTitle?: string;
  children?: React.ReactNode;
};
const Page = ({ description, pageTitle, children }: PageProps) => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <Helmet>
        <title>{pageTitle} | Sano paila</title>
        <meta name="description" content={description} />
      </Helmet>

      {children}
    </div>
  );
};

export default Page;
