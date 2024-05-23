import {
  Card,
  CardTitle,
  CardHeader,
  CardFooter,
  CardContent,
  CardDescription,
} from "@view/components";

export const App = () => (
  <main className="h-screen w-full flex items-center justify-center">
    <Card>
      <CardHeader>
        <CardTitle>This is my title</CardTitle>
        <CardDescription>This is my description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is my content</p>
      </CardContent>
      <CardFooter>
        <p>This is my title footer</p>
      </CardFooter>
    </Card>
  </main>
);
