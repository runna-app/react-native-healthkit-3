import Native from '../native-types'

const resumeMirroringWorkoutSession: () => Promise<boolean> = async () => Native.resumeMirroringWorkoutSession()

export default resumeMirroringWorkoutSession
