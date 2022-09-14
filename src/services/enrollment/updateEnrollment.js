import { doc, updateDoc } from "@firebase/firestore"
import { getSchoolId } from "../../utils";

export const updateEnrollment = async (db, date, enrollmentId, payload, schoolId=null) => {
  if (schoolId === null) {
    schoolId = getSchoolId()
  }
  
  // Reference the enrollment doc
  const enrRef = doc(
                            db,
                            "schools",
                            schoolId,
                            "sessions",
                            String(date.getFullYear()),
                            `${String(date.toDateString())}-enrollments`,
                            enrollmentId)

  const res = updateDoc(enrRef, payload)
  return res

}

export default updateEnrollment