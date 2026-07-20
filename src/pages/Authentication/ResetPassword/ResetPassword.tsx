import AuthShell from '../../../components/Auth/AuthShell';
import { FormProvider } from 'react-hook-form';
import AuthInput from '../../../components/Auth/AuthInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faArrowRight, faLock } from '@fortawesome/free-solid-svg-icons';
import { useResetPassword } from '../../../hooks/useResetPassword';

export default function ResetPassword() {
  const { methods, onSubmit } = useResetPassword();

  return (
    <>
      <AuthShell
        title="Reset Password"
        subtitle="Enter your reset code to verify your identity."
        footerText="Remember your password?"
        footerLinkText=""
        footerHref=""
        illustrationImage="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=900&q=80"
  illustrationCaption="A strong password keeps your orders and wishlist safe."
      >
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-5">
            <AuthInput
              name='email'
              label="Email address"
              type="email"
              placeholder="you@example.com"
              icon={<FontAwesomeIcon icon={faEnvelope} />}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email"
                }
              }}
            />

            <AuthInput
              name='newPassword'
              label="Password"
              type="password"
              placeholder="Enter your password"
              icon={<FontAwesomeIcon icon={faLock} />}

              rules={{
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.#_-])[A-Za-z\d@$!%*?&.#_-]{8,}$/,
                  message:
                    "Password must contain uppercase, lowercase, number, and special character",
                },
              }}
            />


            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-600 px-4 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition hover:bg-primary-700">
              Reset Password
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>
        </FormProvider>
      </AuthShell>
    </>
  )
}
