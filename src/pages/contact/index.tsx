import Link from "next/link";
import MainLayout from "../../../components/Layouts/MainLayout/mainLayout.component";

export default function ContactPage() {
  return (
    <MainLayout>
      <h1>Contact Page</h1>
      <h2 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h2>
      <div className={"center"}>
        <div className={"description"}>
          <p>
            Get started by editing&nbsp;
            <code className={"code"}>src/pages/contact/index.tsx</code>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
