import RootLayout from "../layout";

export default async function WithoutFooterLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <RootLayout>
        {children}
      </RootLayout>
    );
  }