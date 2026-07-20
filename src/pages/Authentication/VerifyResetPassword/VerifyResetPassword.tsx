import AuthShell from '../../../components/Auth/AuthShell';
import { FormProvider } from 'react-hook-form';
import AuthInput from '../../../components/Auth/AuthInput';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useVerifyResetPassword } from '../../../hooks/useVerifyResetPassword';
import { faEnvelope, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function VerifyResetPassword() {
  const { methods, onSubmit } = useVerifyResetPassword();

  return (
    <>
      <AuthShell
        title="Verify Reset Password"
        subtitle="Enter your reset code to verify your identity."
        footerText=""
        footerLinkText=""
        footerHref=""
         illustrationImage="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?auto=format&fit=crop&w=900&q=80"
  illustrationCaption="Track your orders live, from dispatch to your doorstep."
      >
        <FormProvider {...methods} >
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <AuthInput
              name="resetCode"
              label="Reset Code"
              type="text"
              placeholder="Enter your reset code"
              rules={{
                required: "Reset code is required",
                pattern: {
                  value: /^\d{6}$/,
                  message: "Invalid reset code"
                }

              }}
              icon={<FontAwesomeIcon icon={faEnvelope} />}
            />
            <button className="flex w-full items-center justify-center gap-2 rounded-2xl bg-primary-600 px-4 py-3.5 my-5 text-sm font-semibold text-white shadow-lg shadow-primary-600/20 transition hover:bg-primary-700">
              Verify Reset Code
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </form>
        </FormProvider>
      </AuthShell>
    </>
  )
}
