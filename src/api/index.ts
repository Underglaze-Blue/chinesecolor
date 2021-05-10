import Instance from '../http/http'

export const fetchColors = async (): Promise<object> => {
  return Instance.get('./data/colors.json')
}
