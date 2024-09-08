import { AdminRoutes } from '../../admin/routes/AdminRoutes'
import { ProfessorRoutes } from '../../professors/routes/ProfessorRoutes.jsx'
import { SponsorRoutes } from '../../sponsors/routes/SponsorRoutes'
import { StudentRoutes } from '../../students/routes/StudentRoutes'

export const roleRouterComponent = {
  'super-admin': AdminRoutes,
  'free-user-owner': SponsorRoutes,
  'premium-user-owner': SponsorRoutes,
  'user-professor': ProfessorRoutes,
  'free-user-student': StudentRoutes,
  'premium-user-routes': StudentRoutes
}
