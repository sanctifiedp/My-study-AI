import { useRouter } from "next/router";

export default function QuizPage() {
  const router = useRouter();
  const { quizId } = router.query;

  return <h1>Quiz ID: {quizId}</h1>;
}
