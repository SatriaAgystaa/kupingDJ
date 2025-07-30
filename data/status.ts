export interface TransactionStep {
  time: string
  label: string
  status: string
  icon: string
}

export const transactionSteps: TransactionStep[] = [
  {
    time: '14:00 PM, 5 Mar 2024',
    label: 'Transaction Created',
    status: 'CREATED',
    icon: '/icons/status/created.svg'
  },
  {
    time: '14:00 PM, 5 Mar 2024',
    label: 'Transaction Accepted',
    status: 'ACCEPTED',
    icon: '/icons/status/accepted.svg'
  },
  {
    time: '14:00 PM, 5 Mar 2024',
    label: 'Pending Transaction',
    status: 'PENDING',
    icon: '/icons/status/pending.svg'
  },
  {
    time: '14:00 PM, 5 Mar 2024',
    label: 'On Process',
    status: 'ON_PROCESS',
    icon: '/icons/status/process.svg'
  },
  {
    time: '14:00 PM, 5 Mar 2024',
    label: 'Transaction Complete',
    status: 'SUCCESS',
    icon: '/icons/status/success.svg'
  },
]
