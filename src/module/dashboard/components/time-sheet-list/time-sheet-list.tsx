import React, { useState } from 'react';
import Footer from '@/src/themes/components/footer/footer';

const TimeSheetList = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    project: '',
    workType: '',
    description: '',
    hours: 12
  });

  const [timesheetData, setTimesheetData] = useState([
    {
      date: 'Jan 21',
      fullDate: 'January 21, 2025',
      tasks: [
        { id: 1, project: 'Project Name', hours: 4, type: 'Homepage Development' },
        { id: 2, project: 'Project Name', hours: 4, type: 'Homepage Development' }
      ]
    },
    {
      date: 'Jan 22',
      fullDate: 'January 22, 2025',
      tasks: [
        { id: 3, project: 'Project Name', hours: 4, type: 'Homepage Development' },
        { id: 4, project: 'Project Name', hours: 4, type: 'Homepage Development' },
        { id: 5, project: 'Project Name', hours: 4, type: 'Homepage Development' }
      ]
    },
    {
      date: 'Jan 23',
      fullDate: 'January 23, 2025',
      tasks: [
        { id: 6, project: 'Project Name', hours: 4, type: 'Homepage Development' },
        { id: 7, project: 'Project Name', hours: 4, type: 'Homepage Development' },
        { id: 8, project: 'Project Name', hours: 4, type: 'Homepage Development' }
      ]
    },
    {
      date: 'Jan 24',
      fullDate: 'January 24, 2025',
      tasks: [
        { id: 9, project: 'Project Name', hours: 4, type: 'Homepage Development' },
        { id: 10, project: 'Project Name', hours: 4, type: 'Homepage Development' },
        { id: 11, project: 'Project Name', hours: 4, type: 'Homepage Development' }
      ]
    },
    {
      date: 'Jan 25',
      fullDate: 'January 25, 2025',
      tasks: []
    }
  ]);

  const [activeMenu, setActiveMenu] = useState(null);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add logic to handle form submission
    console.log('Form submitted:', formData);
    setShowModal(false);
    // Reset form
    setFormData({
      project: '',
      workType: '',
      description: '',
      hours: 12
    });
  };

  const toggleMenu = (taskId: any) => {
    setActiveMenu(activeMenu === taskId ? null : taskId);
  };
  return (
    <div className="min-h-screen bg-gray-50 p-4  sm:!p-4 lg:!p-8">

      {/* Timesheet Container */}
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-sm border border-gray-200">
        {/* Title Bar */}
        <div className="bg-white px-[16px]  sm:!px-[16px] lg:!px-[24px] py-4 flex items-center justify-between rounded-t-lg">
          <div className="!text-[24px] font-semibold text-gray-800">This week's timesheet</div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">20/40 hrs</span>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500 rounded-full" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>
        <div className="px-[24px] py-0 text-xs text-gray-500">11 - 16 November 2025</div>

        {/* Timesheet List */}
        <div className="p-[12px] sm:!p-[16px] lg:!p-[24px]">
          {timesheetData.map((day, dayIndex) => (
            <div key={dayIndex} className="mb-8 last:mb-0 grid lg:grid-cols-[80px_1fr] lg:gap-6 sm:grid-cols-1 sm:gap-2">
              {/* Date Header */}
              <div className="flex items-start gap-3 mb-4">
                <h3 className="text-sm font-semibold text-gray-700">{day.date}</h3>
              </div>

              {/* Tasks */}
              <div className="space-y-3 lg:ml-4 sm:ml-0">
                {day.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="flex items-center justify-between p-2 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors"
                  >
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-800">{task.type}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-gray-500">{task.hours} hrs</span>
                      <span className="text-xs text-blue-600 font-medium">{task.project}</span>
                      <div className="relative">
                        <button
                          onClick={() => toggleMenu(task.id)}
                          className="p-1 hover:bg-gray-200 rounded"
                        >
                          <span className='flex items-center justify-center !text-gray-500 mb-2'>...</span>
                        </button>
                        {activeMenu === task.id && (
                          <div className="absolute right-0 mt-1 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-10">
                            <button className="w-full px-4 py-2 text-left text-sm !text-gray-700 hover:bg-gray-50 flex items-center gap-2">
                              Edit
                            </button>
                            <button className="w-full px-4 py-2 text-left text-sm !text-red-600 hover:bg-gray-50 flex items-center gap-2">
                              Delete
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}

                {/* Add New Task Button */}
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full py-2 text-sm !text-blue-600 hover:text-blue-700 flex items-center justify-center gap-2 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-400 transition-colors"
                >
                  Add new task
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 !bg-black !bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="!bg-white rounded-lg shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b !border-gray-200">
              <h2 className="text-[24px] font-semibold text-gray-800">Add New Entry</h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 hover:bg-gray-100 rounded-lg transition-colors"
              >
                x
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              {/* Select Project */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Project <span className="text-red-500">*</span>
                  <span className="ml-1 text-gray-400 cursor-help">ⓘ</span>
                </label>
                <select
                  value={formData.project}
                  onChange={(e) => setFormData({ ...formData, project: e.target.value })}
                  className="w-full !px-4 !py-2.5 border !border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white !text-gray-700"
                  required
                >
                  <option value="">Project Name</option>
                  <option value="project1">Project 1</option>
                  <option value="project2">Project 2</option>
                  <option value="project3">Project 3</option>
                </select>
              </div>

              {/* Type of Work */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Work <span className="text-red-500">*</span>
                  <span className="ml-1 text-gray-400 cursor-help">ⓘ</span>
                </label>
                <select
                  value={formData.workType}
                  onChange={(e) => setFormData({ ...formData, workType: e.target.value })}
                  className="w-full !px-4 !py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white !text-gray-700"
                  required
                >
                  <option value="">Bug fixes</option>
                  <option value="development">Development</option>
                  <option value="design">Design</option>
                  <option value="testing">Testing</option>
                  <option value="meeting">Meeting</option>
                </select>
              </div>

              {/* Task Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Task description <span className="text-red-500">*</span>
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Write text here ..."
                  className="w-full px-4 py-2.5 border !border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none !text-gray-700"
                  required
                />
                <p className="mt-2 text-xs text-gray-500">A note for extra info</p>
              </div>

              {/* Hours */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hours <span className="text-red-500">*</span>
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, hours: Math.max(0, formData.hours - 1) })}
                    className="w-10 h-10 flex items-center justify-center border !border-gray-300 rounded-lg hover:bg-gray-50 !text-gray-700"
                  >
                    −
                  </button>
                  <input
                    type="number"
                    value={formData.hours}
                    onChange={(e) => setFormData({ ...formData, hours: parseInt(e.target.value) || 0 })}
                    className="w-20 px-4 py-2 text-center border !border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent !text-gray-700"
                    min="0"
                  />
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, hours: formData.hours + 1 })}
                    className="w-10 h-10 flex items-center justify-center border !border-gray-300 rounded-lg hover:bg-gray-50 !text-gray-700"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={handleSubmit}
                  className="!flex-1 !bg-blue-600 hover:bg-blue-700 text-white font-medium !py-3 rounded-lg transition-colors"
                >
                  Add entry
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="!flex-1 !bg-white hover:bg-gray-50 !text-gray-700 font-medium !py-3 rounded-lg border border-gray-300 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* footer */}
      <Footer/>
    </div>
  )
}

export default TimeSheetList;
