import React, { useState } from 'react';
import { Button, Input, Textarea } from '../../Components';
import styled from 'styled-components';
import { colors } from '../../Assets/Colors';

const FirstForm = styled.div`
  display: flex;
  width: fit-content;
  margin: 1rem 2rem;
  gap: 2rem;
  align-items: end;
`;
const FirstFormFields = styled.div`
  display: flex;
  width: fit-content;
  gap: 2rem;
`;

const SecondForm = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin: 1rem 2rem;
  width: fit-content;
`;

const SecondFormFields = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Stage1 = ({ stageOnChange, getFramework }) => {
  const [numberOfAC, setNumberOfAC] = useState(2);
  const [numberOfFeatures, setNumberOfFeatures] = useState(2);
  const [showError, setShowError] = useState(false);
  const [showSecondForm, setShowSecondForm] = useState(false);
  const [characteristics, setCharacteristics] = useState(null);
  const [features, setFeatures] = useState(null);
  const [question, setQuestion] = useState('');
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(3);

  const handleSubmitFirstForm = () => {
    setShowError(true);
    if (numberOfAC && numberOfFeatures) {
      setShowError(false);
      setShowSecondForm(true);
      const newChars = {};
      for (let i = 0; i < numberOfAC; i++) {
        newChars[i] = '';
      }
      const newFeatures = {};
      for (let i = 0; i < numberOfFeatures; i++) {
        newFeatures[i] = '';
      }
      setCharacteristics(newChars);
      setFeatures(newFeatures);
    }
  };

  const handleNext = () => {
    setShowError(true);
    const emptyChar = Object.values(characteristics).some(
      (value) => value === '',
    );
    const emptyFeature = Object.values(features).some((value) => value === '');
    if (!emptyChar && !emptyFeature && question && minValue && maxValue) {
      setShowError(false);
      const valueMatrix = Object.keys(characteristics).map(() => {
        return [
          ...Object.keys(features).map(() => {
            return { value: minValue, color: 'low', answer: '' };
          }),
        ];
      });

      const newFramework = {
        characteristics: Object.values(characteristics),
        features: Object.values(features),
        question,
        minValue,
        maxValue,
        valueMatrix,
      };
      getFramework(newFramework);
      stageOnChange(2);
    }
  };

  const handleClear = () => {
    setNumberOfAC(2);
    setNumberOfFeatures(2);
    setShowSecondForm(false);
  };

  const handleCharacteristicsChange = (index, value) => {
    const updatedCharacteristics = { ...characteristics };
    updatedCharacteristics[index] = value;
    setCharacteristics(updatedCharacteristics);
  };
  const handleFeaturesChange = (index, value) => {
    const updatedFeatures = { ...features };
    updatedFeatures[index] = value;
    setFeatures(updatedFeatures);
  };
  return (
    <div>
      <FirstForm>
        <FirstFormFields>
          <Input
            label="Number of architectural Charecteristics"
            placeholder="Enter a Nubmer"
            error={
              showError && (numberOfAC.length === 0 || numberOfAC === 0)
                ? 'Required'
                : null
            }
            value={numberOfAC}
            type="number"
            onChange={(e) => setNumberOfAC(+e.target.value)}
          />
          <Input
            label="Number of Features"
            placeholder="Enter a Nubmer"
            error={
              showError &&
              (numberOfFeatures.length === 0 || numberOfFeatures === 0)
                ? 'Required'
                : null
            }
            value={numberOfFeatures}
            onChange={(e) => setNumberOfFeatures(+e.target.value)}
            type="number"
          />
        </FirstFormFields>
        {showSecondForm ? (
          <Button
            color={colors.active}
            variant="bordered"
            style={{ marginBottom: '1rem' }}
            onClick={handleClear}
          >
            Clear
          </Button>
        ) : (
          <Button
            color={colors.active}
            variant="bordered"
            style={{ marginBottom: '1rem' }}
            onClick={handleSubmitFirstForm}
          >
            Continue
          </Button>
        )}
      </FirstForm>
      {showSecondForm && (
        <SecondForm>
          <SecondFormFields>
            {[...Array(numberOfAC).keys()].map((index) => (
              <Input
                label={`Architectural Characteristics ${index + 1}`}
                placeholder="Enter Charecterstic"
                value={characteristics[index]}
                onChange={(e) =>
                  handleCharacteristicsChange(index, e.target.value)
                }
                error={
                  showError && characteristics[index].length === 0
                    ? 'Required'
                    : null
                }
                key={index}
              />
            ))}
          </SecondFormFields>
          <SecondFormFields>
            {[...Array(numberOfFeatures).keys()].map((index) => (
              <Input
                key={index}
                label={`Feature ${index + 1}`}
                placeholder="Enter Feature"
                value={features[index]}
                error={
                  showError && features[index].length === 0 ? 'Required' : null
                }
                onChange={(e) => handleFeaturesChange(index, e.target.value)}
              />
            ))}
          </SecondFormFields>
          <SecondFormFields>
            <Textarea
              label="Justification Question"
              placeholder="Enter the Question"
              value={question}
              error={showError && question.length === 0 ? 'Required' : null}
              onChange={(e) => setQuestion(e.target.value)}
            />
          </SecondFormFields>
          <SecondFormFields>
            <Input
              label="Min value"
              placeholder="Enter a Number"
              value={minValue}
              error={
                showError && (minValue.length === 0 || minValue === 0)
                  ? 'Required'
                  : null
              }
              onChange={(e) => setMinValue(e.target.value)}
              type="number"
            />
            <Input
              label="Max value"
              placeholder="Enter a Number"
              value={maxValue}
              error={
                showError && (maxValue.length === 0 || maxValue === 0)
                  ? 'Required'
                  : null
              }
              onChange={(e) => setMaxValue(e.target.value)}
              type="number"
            />
          </SecondFormFields>
          <div></div>
          <Button
            variant="solid"
            color={colors.active}
            onClick={handleNext}
            style={{
              justifySelf: 'end',
            }}
          >
            Next
          </Button>
        </SecondForm>
      )}
    </div>
  );
};

export default Stage1;
