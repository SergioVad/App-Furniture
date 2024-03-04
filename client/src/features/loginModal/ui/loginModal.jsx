// Сделать модалку при авторизации

import { LoginForm } from '@/features/loginForm/ui/loginForm';

export const LoginModal = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6 offset-3 shadow p-4">
                    <h3 className="mb-4">Логин</h3>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};
