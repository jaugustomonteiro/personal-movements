import { Form } from '../Form';
import { Overlay } from './styled';

const FormModal: React.FC = () => {
  return (
    <Overlay>
      <Form />
    </Overlay>
  );
};

export default FormModal;
