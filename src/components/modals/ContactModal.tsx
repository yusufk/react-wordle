import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const ContactModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="Contact us" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        If you have any issues or questions, please feel free to contact us at yusufk@mailbox.co.za
        or visit https://eth.yusufk.co.za/ to buy me a coffee!
      </p>
    </BaseModal>
  )
}
