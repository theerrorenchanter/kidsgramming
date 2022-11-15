import { AdminRoutes } from '../../admin/routes/AdminRoutes'
import { SponsorRoutes } from '../../sponsors/routes/SponsorRoutes'

export const roleRouterComponent = {
  'super-admin': AdminRoutes,
  'free-user-owner': SponsorRoutes,
  'premium-user-owner': SponsorRoutes
}
