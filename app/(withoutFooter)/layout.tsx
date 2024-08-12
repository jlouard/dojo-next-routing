import RootLayout from "../layout";

export default async function FooterLayout({
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