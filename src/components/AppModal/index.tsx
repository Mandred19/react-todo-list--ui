import React, { FC, ReactElement } from 'react';
import {
  Backdrop,
  Box,
  Fade,
  Modal,
  Stack, Theme,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import AppModalHeader from './AppModalHeader';
import AppModalFooter from './AppModalFooter';
import { IUseModalVisibility } from '../../hooks/useModalVisibility';

const useStyles = makeStyles((theme: Theme) => ({
  modalWrapper: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: 360,
    backgroundColor: '#fff',
  },
  modalContent: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

const AppModal: FC<IAppModalProps> = (props): ReactElement => {
  const classes = useStyles();
  const {children, headerText, footerSubmitButtonText, footerCancelButtonText, visibilityHandlers, submitHandler, submitButtonType, isPending} = props;
  const {modalVisibility, setModalVisibility} = visibilityHandlers;

  return (
    <Modal
      open={modalVisibility}
      onClose={() => setModalVisibility(false)}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{timeout: 500}}>
      <Fade in={modalVisibility}>
        <Box className={classes.modalWrapper}>
          <AppModalHeader
            headerText={headerText}
            visibilityHandlers={visibilityHandlers}/>

          <Stack spacing={2} className={classes.modalContent}>
            {children}
          </Stack>

          <AppModalFooter
            footerSubmitButtonText={footerSubmitButtonText}
            footerCancelButtonText={footerCancelButtonText}
            visibilityHandlers={visibilityHandlers}
            submitHandler={submitHandler}
            submitButtonType={submitButtonType}
            isPending={isPending}/>
        </Box>
      </Fade>
    </Modal>
  );
};

export default AppModal;

interface IAppModalProps {
  headerText: string,
  children: ReactElement,
  footerSubmitButtonText: string,
  footerCancelButtonText: string,
  visibilityHandlers: IUseModalVisibility,
  submitHandler: () => Promise<void>,
  submitButtonType: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
  isPending: boolean,
}
