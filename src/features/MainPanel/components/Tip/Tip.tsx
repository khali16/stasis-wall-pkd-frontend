import { FunctionComponent } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormValues } from '../../types/FormTypes';

export const Tip: FunctionComponent = () => {
  const { setValue } = useFormContext<FormValues>();
  return (
    <div className={'flex flex-col gap-4 text-center'}>
      <div>
        <p className={'text-tertiary-color text-xs'}>Najczęściej wyszukiwane numery PKD dla:</p>
      </div>
      <div className={'flex flex-row gap-3'}>
        {['informatyk', 'miodozer', 'moczymorda'].map((tag) => (
          <button
            key={tag}
            onClick={() => {
              setValue('autofillInput', tag);
            }}
            className={'border rounded-3xl text-xs bg-transparent text-primary-color border-primary-color p-2'}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};