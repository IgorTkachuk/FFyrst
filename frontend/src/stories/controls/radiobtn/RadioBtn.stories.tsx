import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { RadioBtn } from './RadioBtn';

export default {
  title: 'UI/Controls/RadioBtn',
  component: RadioBtn,
} as ComponentMeta<typeof RadioBtn>;

const Template: ComponentStory<typeof RadioBtn> = (args) => (
  <>
    <RadioBtn {...args} />
  </>
);

//story
export const RadioBtnExmpl = Template.bind({});
RadioBtnExmpl.args = {
  value: 'Boolean',
};

// how to use radiobtn
export const RadioBtnGroupExample = () => {
  const [type, setType] = React.useState('Boolean');

  const onChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>,
  ): void => {
    setType(event.target.value);
  };

  return (
    <div className="w-80 flex items-center justify-between">
      {/*<RadioBtn*/}
      {/*  value="Boolean"*/}
      {/*  onChange={onChangeHandler}*/}
      {/*/>*/}
      {/*<RadioBtn*/}
      {/*  value="String"*/}
      {/*  onChange={onChangeHandler}*/}
      {/*/>*/}
      {/*<RadioBtn*/}
      {/*  disabled={true}*/}
      {/*  value="Number"*/}
      {/*  onChange={onChangeHandler}*/}
      {/*/>*/}
    </div>
  );
};
