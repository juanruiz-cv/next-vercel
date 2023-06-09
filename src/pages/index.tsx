import Link from "next/link";
import MainLayout from "../../components/Layouts/MainLayout/mainLayout.component";

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h2 className={"title"}>
        Ir a <Link href="/about">About</Link>
      </h2>
      <div className={"center"}>
        <div className={"description"}>
          <p>
            Get started by editing&nbsp;
            <code className={"code"}>src/pages/index.tsx</code>
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
