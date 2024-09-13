
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toasts = {
    success: (message, options = {}) => {
        toast.success(message, { ...options });
    },
    error: (message, options = {}) => {
        toast.error(message, { ...options });
    },
    info: (message, options = {}) => {
        toast.info(message, { ...options });
    },
    warning: (message, options = {}) => {
        toast.warning(message, { ...options });
    }
};

export default Toasts;
