import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import DefaultLayout from '~/layouts/DefaultLayout'
import NotFoundPage from '~/pages/404'
import ForgotPasswordPage from '~/pages/auth/forgot-password'
import LoginPage from '~/pages/auth/login'
import RegisterPage from '~/pages/auth/register'
import Student from '~/pages/student'
import HomePage from '~/pages/home'
import { routePath } from './routePath'

const BrowserRouter = () => {
  const router = createBrowserRouter([
    {
      path: routePath.home,
      element: (
        <DefaultLayout>
          <HomePage />
        </DefaultLayout>
      ),
    },
    {
      path: routePath.login,
      element: (
        <DefaultLayout>
          <LoginPage />
        </DefaultLayout>
      ),
    },
    {
      path: routePath.register,
      element: (
        <DefaultLayout>
          <RegisterPage />
        </DefaultLayout>
      ),
    },
    {
      path: routePath.forgotPassword,
      element: (
        <DefaultLayout>
          <ForgotPasswordPage />
        </DefaultLayout>
      ),
    },
    {
      path: routePath.student,
      element: (
        <DefaultLayout>
          <Student />
        </DefaultLayout>
      ),
    },
    {
      path: routePath.notFound,
      element: <NotFoundPage />,
    },
  ])

  return <RouterProvider router={router} />
}

export default BrowserRouter
