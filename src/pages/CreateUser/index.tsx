import { useState } from "react";
import { Title, SubTitle } from "../../components/ui/Typography";
import useGetQuestions from "../../hooks/get/getPrimaryQuestion";
import { Button } from "../../components/ui/Button";
import Checkbox from "../../components/form/Checkbox";

const CreateUser = () => {
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [filledAnswer, setFilledAnswer] = useState<Record<string, string>>({});
  const { data, isLoading } = useGetQuestions();

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

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <Title level={3}>Questions</Title>
        <SubTitle>{current.question}</SubTitle>

        <div className="space-y-2 text-left">
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
          <Button onClick={handlePrev} disabled={activeQuestion === 0}>
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={activeQuestion === data.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;
