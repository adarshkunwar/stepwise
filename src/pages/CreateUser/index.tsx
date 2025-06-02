import { useState } from "react";
import { Title, SubTitle } from "../../components/ui/Typography";
import useGetQuestions from "../../hooks/get/getPrimaryQuestion";
import { Button } from "../../components/ui/Button";
import Checkbox from "../../components/form/Checkbox";
import usePostPrimaryQuestionAnswer from "../../hooks/post/postPrimaryQuestionAnswer";
import { useSelector } from "react-redux";
import type { RootState } from "../../stores/store";

const CreateUser = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [filledAnswer, setFilledAnswer] = useState<Record<string, string>>({});
  const { data, isLoading } = useGetQuestions();
  const { mutate } = usePostPrimaryQuestionAnswer();
  const { user } = useSelector((state: RootState) => state.auth);

  if (isLoading || !data) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <p>Loading questions...</p>
      </div>
    );
  }

  const current = data[activeQuestion];

  const handleSelect = (answer: string) => {
    setFilledAnswer((prev) => ({
      ...prev,
      [current.key]: answer,
    }));
  };

  const handleNext = () => {
    if (activeQuestion < data.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (activeQuestion > 0) {
      setActiveQuestion((prev) => prev - 1);
    }
  };

  const handleSubmit = () => {
    console.log("Submitted Answers:", filledAnswer);
    const payload = {
      userId: user || "", // Get userId from your auth state or props
      answers: Object.entries(filledAnswer).map(([key, value]) => ({
        [key]: value,
      })),
    };

    mutate(payload);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="w-xl mx-auto text-center space-y-6">
        <Title level={3}>Questions</Title>
        <SubTitle>{current.question}</SubTitle>

        <div className="space-y-2 text-left grid grid-cols-2">
          {current.possibleAnswer.map((ans: string, i: number) => (
            <div key={i} className="p-3 rounded-lg cursor-pointer">
              <Checkbox
                checked={filledAnswer[current.key] === ans}
                label={ans}
                onChange={() => handleSelect(ans)}
              />
            </div>
          ))}
        </div>

        <div className="flex justify-between pt-6 gap-4">
          <div>
            <Button
              onClick={handlePrev}
              disabled={activeQuestion === 0}
              className={`w-32 h-12`}
            >
              Previous
            </Button>
          </div>
          <div>
            <Button
              onClick={
                data.length - 1 === activeQuestion ? handleSubmit : handleNext
              }
              className={`w-32 h-12`}
            >
              {data.length - 1 === activeQuestion ? "Submit" : "Next"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
