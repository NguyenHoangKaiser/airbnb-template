export function PreviewPane({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <div className=" border-b bg-gray-100 p-8 [&_h1]:mb-8 [&_h1]:text-2xl [&_h1]:font-bold">
        <h1>{title}</h1>
        <div className="flex flex-row flex-wrap items-start">{children}</div>
      </div>
      ;
    </>
  );
}

export function Col({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="w-80 p-8">
      <h2 className="mb-5 border-b font-bold">{title}</h2>
      <div className="flex flex-col items-start space-y-3">{children}</div>
    </div>
  );
}
