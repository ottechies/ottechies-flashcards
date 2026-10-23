document.addEventListener("DOMContentLoaded", () => {
  const courseList = document.getElementById("course-list");
  const emptyNotice = document.getElementById("course-empty");
  const lectureSelect = document.getElementById("lecture-select");
  const startButton = document.getElementById("start-btn");
  const sizeOptions = document.getElementById("deck-size-options");

  let selectedCourseKey = null;
  let selectedCount = "10";
  let courses = window.QUIZ_COURSES || {};

  function getCourseEntries() {
    courses = window.QUIZ_COURSES || {};
    return Object.entries(courses);
  }

  function getLectures(course) {
    return course &&
      course.lectures &&
      typeof course.lectures === "object"
      ? Object.entries(course.lectures)
      : [];
  }

  function renderCourses() {
    courseList.innerHTML = "";

    const entries = getCourseEntries();

    emptyNotice.hidden = entries.length > 0;

    if (!entries.length) return;

    entries.forEach(([key, course], index) => {
      const button = document.createElement("button");

      button.type = "button";
      button.className =
        "course-option" + (index === 0 ? " is-active" : "");

      button.innerHTML = `
        <span class="course-symbol">
          ${String(index + 1).padStart(2, "0")}
        </span>
        <span>
          <strong></strong>
          <small></small>
        </span>
      `;

      button.querySelector("strong").textContent =
        course.title || key;

      const lectureCount = getLectures(course).length;

      button.querySelector("small").textContent =
        `${lectureCount} lecture module${lectureCount === 1 ? "" : "s"}`;

      button.addEventListener("click", () => {
        selectedCourseKey = key;

        courseList
          .querySelectorAll(".course-option")
          .forEach(item => {
            item.classList.toggle("is-active", item === button);
          });

        populateLectures();
      });

      courseList.appendChild(button);
    });

    selectedCourseKey = entries[0][0];

    populateLectures();
  }

  function populateLectures() {
    lectureSelect.innerHTML = "";

    const course = courses[selectedCourseKey];
    const entries = getLectures(course);

    if (!entries.length) {
      lectureSelect.add(new Option("No lectures available", ""));
      startButton.disabled = true;
      return;
    }

    entries.forEach(([key, lecture]) => {
      lectureSelect.add(
        new Option(lecture.title || key, key)
      );
    });

    startButton.disabled = false;
  }

  sizeOptions.addEventListener("click", event => {
    const button = event.target.closest("[data-count]");

    if (!button) return;

    selectedCount = button.dataset.count;

    sizeOptions
      .querySelectorAll("[data-count]")
      .forEach(item => {
        item.classList.toggle("is-selected", item === button);
      });
  });

  startButton.addEventListener("click", () => {
    const course = courses[selectedCourseKey];

    const lecture =
      course &&
      course.lectures &&
      course.lectures[lectureSelect.value];

    if (
      !lecture ||
      !Array.isArray(lecture.questions) ||
      !lecture.questions.length
    ) {
      alert(
        "This lecture has no questions yet. Check your course data file."
      );
      return;
    }

    // Copy the source questions so the original course data stays unchanged.
    const questions = lecture.questions.map((item, index) => ({
      ...item,

      // Give each card a stable identity.
      id:
        item.id ||
        `${selectedCourseKey}-${lectureSelect.value}-${index}`
    }));

    shuffle(questions);

    const count =
      selectedCount === "all"
        ? questions.length
        : Number(selectedCount);

    const deck = questions.slice(
      0,
      Math.min(count, questions.length)
    );

    const payload = {
      courseKey: selectedCourseKey,
      courseTitle: course.title || selectedCourseKey,

      lectureKey: lectureSelect.value,
      lectureTitle: lecture.title || lectureSelect.value,

      deck,

      // Each card starts without a rating.
      results: {
        perfect: [],
        okay: [],
        fail: []
      },

      reviewPile: null,
      index: 0
    };

    try {
      sessionStorage.setItem(
        "ottechies-session",
        JSON.stringify(payload)
      );
    } catch (_) {
      alert(
        "This browser could not save the session. Please enable local site storage."
      );
      return;
    }

    window.location.href = "views/study.html";
  });

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));

      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  renderCourses();
});