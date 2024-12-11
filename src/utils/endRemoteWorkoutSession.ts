import Native from '../native-types'

const endRemoteWorkoutSession: () => Promise<boolean> = async () => Native.endRemoteWorkoutSession()

export default endRemoteWorkoutSession
