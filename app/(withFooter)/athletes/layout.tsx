type LayoutProps = {
    children: React.ReactNode;
    athletesList: React.ReactNode;
    sideMenu: React.ReactNode;
  };
  
  export default function AthleteLayout({
    athletesList,
    sideMenu,
  }: LayoutProps) {

        return (
        <div className="flex flex-row w-full h-full p-8">
            {athletesList}
            {sideMenu}
        </div>
        );
    }
