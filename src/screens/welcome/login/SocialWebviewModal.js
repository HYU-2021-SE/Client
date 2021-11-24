import React from 'react';
import Modal from 'react-native-modal';
import { SocialWebview } from './SocialWebview';

export const SocialWebviewModal = (props) => {
  return (
    <Modal visible={props.visible} style={{ flex: 1 }}>
      <SocialWebview source={{ uri: props.source }} closeSocialModal={props.closeSocialModal} />
    </Modal>
  );
};
