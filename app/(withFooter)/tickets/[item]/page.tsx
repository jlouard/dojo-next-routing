type PageParams = {
    params: { item: string };
};

export default function Page({ params: {item} }: PageParams) {
    return (
        <main>
            <div className="flex flex-col flex-1 items-center">
                {item}
            </div>
        </main>
    );
};