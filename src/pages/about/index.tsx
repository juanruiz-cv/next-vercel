import Link from "next/link";
import { ReactElement } from "react";
import MainLayout from "../../../components/Layouts/MainLayout/mainLayout.component";
import WhiteLayout from "../../../components/Layouts/WhiteLayout/whiteLayout.component";

export default function AboutPage() {
  return (
    <>
      <h1>About Page</h1>
      <h2 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h2>
      <div className={"center"}>
        <div className={"description"}>
          <p>
            Get started by editing&nbsp;
            <code className={"code"}>src/pages/about/index.tsx</code>
          </p>
        </div>
      </div>
    </>
  );
}

AboutPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <WhiteLayout>{page}</WhiteLayout>
    </MainLayout>
  );
};
