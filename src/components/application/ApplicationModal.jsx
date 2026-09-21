import { useUI } from '../../context/UIContext'
import Modal from '../ui/Modal'
import ApplicationForm from './ApplicationForm'

export default function ApplicationModal() {
  const { applicationOpen, closeApplication, applicationIntent } = useUI()
  return (
    <Modal open={applicationOpen} onClose={closeApplication} labelledBy="application-title">
      <ApplicationForm intent={applicationIntent} onClose={closeApplication} />
    </Modal>
  )
}
