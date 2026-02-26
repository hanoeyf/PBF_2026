import Navbar from "../navbar";

type AppshellProps = {
    children: React.ReactNode;
}

const Appshell =  (props:AppshellProps) => {
    const { children } = props;

    return (
        <main>
            <Navbar />
            {children}
        </main>
    );
};
export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <footer>Footer</footer>
    </>
  );
}