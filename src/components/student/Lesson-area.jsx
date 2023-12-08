import '../../styles/lesson_area.css';

export const LessonArea = ({ lecturerInfo, courseInfo }) => {
  return (
    <main>
      <nav className="d-flex ps-5 bg-light nav-menu">
        <h3 className='mt-1'>Lesson Area</h3>
        <ul className='d-flex mt-2 ms-5 list-style-none'>
          <li className='la-nav-link grey'>Submissions</li>
          <li className='ms-3 la-nav-link grey'>Chats</li>
        </ul>
      </nav>
      <section>
        <small className='ms-4 me-2 text-primary'>Did you know?</small>
        <small className='grey'>Submissions of articles, links, project etc, made here are end-to-end encryted, meaning you dont have to be afraid of IPT</small>
        <p className='m-4'>This Lesson area is provided to support the easy exchange of study materials, tests, assignments, examinations and general academic conversions between the student(name below) and lecturer(name below) on matters related to course: {courseInfo.title}</p>
        <div className='ms-4'>student: ...</div>
        <div className='ms-4'>lecturer: {lecturerInfo.first_name} {lecturerInfo.last_name}</div>
        <small className='ms-4'>Note: If the student, lecturer or course information above is incorrect, make a complain at <a href='#'>studentSuport@rails.org</a></small>
      </section>
    </main>
  )
}
