import { useEffect, useState } from 'react'
import { getSuscriptionsList } from '../../api/suscription/suscriptionAPI'
import { ErrorAlert } from '../../ui/components/ErrorAlert'
import { PageContentLayout } from '../../ui/layout/PageContentLayout'
import { SubscriptionsLayout } from '../layout/SubscriptionsLayout'
import { Suscriptions } from '../views/Suscriptions'

export const SuscriptionsPage = () => {
  const [suscriptions, setSuscriptions] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  useEffect(() => {
    getSuscriptionsList().then(res => {
      setSuscriptions(res.data)
      setErrorMessage(res.errorMessage)
    })
  }, [])

  return (
    <PageContentLayout>
        <SubscriptionsLayout>
            {errorMessage && <ErrorAlert errorMessage={errorMessage}/>}
            {!errorMessage && <Suscriptions suscriptions={suscriptions}/>}
        </SubscriptionsLayout>
    </PageContentLayout>
  )
}
