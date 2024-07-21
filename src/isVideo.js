module.exports = ({ ext }) => {
  const videoTypes = ['.mp4', '.avi', '.mov', '.wmv', '.flv', '.mkv', '.webm', '.m4v']
  return videoTypes.includes(ext.toLowerCase())
}
