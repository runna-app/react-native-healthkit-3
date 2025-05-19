import Native from '../native-types'

const endMirroringWorkoutSession: () => Promise<boolean> = async () => Native.endMirroringWorkoutSession()

export default endMirroringWorkoutSession
