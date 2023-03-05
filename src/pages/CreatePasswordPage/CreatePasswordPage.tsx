import { Heading, HStack, Text, VStack } from '@chakra-ui/react';
import React, { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Components
import Button from '../../components/Button';
import PasswordInput, { validate } from '../../components/PasswordInput';
import PopupShell from '../../components/PopupShell';

// Constants
import { IMPORT_ACCOUNT_ROUTE } from '../../constants';

// Features
import { setPassword } from '../../features/register';

// Types
import { IAppThunkDispatch, IRootState } from '../../types';

const CreatePasswordPage: FC = () => {
  const { t } = useTranslation();
  const navigate: NavigateFunction = useNavigate();
  const dispatch = useDispatch<IAppThunkDispatch>();
  const password: string | null = useSelector<IRootState, string | null>((state) => state.register.password);
  const score: number = useSelector<IRootState, number>((state) => state.register.score);
  const handleCreatePasswordClick = () => {
    if (!validate(password || '', score, t)) {
      navigate(IMPORT_ACCOUNT_ROUTE);
    }
  };
  const handlePasswordChange = (password: string, score: number) => {
    dispatch(setPassword({
      password,
      score,
    }));
  };
  const handlePreviousClick = () => {
    navigate(-1);
  };

  return (
    <PopupShell>
      <VStack flexGrow={1} spacing={3} w="full">
        <Heading color="gray.500">{t<string>('headings.createPassword')}</Heading>
        <Text color="gray.400">{t<string>('captions.createPassword1')}</Text>
        <Text color="gray.400">{t<string>('captions.createPassword2')}</Text>
        <PasswordInput
          onChange={handlePasswordChange}
          score={score}
          value={password || ''}
        />
      </VStack>
      <HStack mb={8} spacing={4} w="full">
        <Button
          colorScheme="primary"
          onClick={handlePreviousClick}
          size="lg"
          variant="outline"
          w="full"
        >
          {t<string>('buttons.previous')}
        </Button>
        <Button
          colorScheme="primary"
          onClick={handleCreatePasswordClick}
          size="lg"
          variant="solid"
          w="full"
        >
          {t<string>('buttons.create')}
        </Button>
      </HStack>
    </PopupShell>
  );
}

export default CreatePasswordPage;
