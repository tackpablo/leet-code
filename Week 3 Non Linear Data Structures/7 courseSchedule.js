/////////////////////////
// https://leetcode.com/problems/course-schedule/
/////////////////////////

// There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

// For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
// Return true if you can finish all courses. Otherwise, return false.

// uses Depth First Search (DFS), checking for circular dependencies in a disconnected graph

var canFinish = function (numCourses, prerequisites) {
  const prereqsPerCourse = getPreReqsPerCourse(numCourses, prerequisites);

  // Possible states for each course
  const visitedState = {
    // We haven't checked this course yet
    unknown: 0,

    // We're currently checking the prereqs. If we come accross a course with this
    // state, it means that we've found a circular dependency and won't be able to
    // successfully meet the pre-requisites for it.
    checkingPreReqs: 1,

    // We've already verified that we can take the pre-requisites for this course and
    // can skip it
    preReqMet: 2,
  };

  // An array key'd off of a course number with it's value
  // being the previously mentioned `visitedState`
  const visitedStateByCourse = [];

  // Default each course's visited state to `unknown`
  for (let course = 0; course < numCourses; course++) {
    visitedStateByCourse[course] = visitedState.unknown;
  }

  // Recursively (i.e. via depth-first-search) check for a clean pre-requisite hierarchy for the
  // current course (i.e. one that does not contain circular dependancies)
  const isPreReqHierarchyValid = (course) => {
    const state = visitedStateByCourse[course];

    if (state === visitedState.checkingPreReqs)
      return false; // We've found a circular dependency! :(
    else if (state === visitedState.preReqMet)
      return true; // We've already verified this pre-req so we can skip it :)
    else if (state === visitedState.unknown) {
      // We haven't checked this one so let's go ahead and do so..

      visitedStateByCourse[course] = visitedState.checkingPreReqs; // Define this course as being in progress

      const preReqs = prereqsPerCourse[course]; // Get the pre-reqs for this course

      // Recursively validate each pre-requisite
      for (let i = 0; i < preReqs.length; i++) {
        const preReq = preReqs[i];
        const isPreReqValid = isPreReqHierarchyValid(preReq);
        if (!isPreReqValid) return false; // If validation fails, we can just return false;
      }

      visitedStateByCourse[course] = visitedState.preReqMet; // All of the pre-reqs were met! Flag accordingly
      return true;
    }
  };

  // For each course, check for whether it has a valid pre-requisite hierarchy.
  // If any checks return false, we can return false :/
  for (let course = 0; course < numCourses; course++) {
    const isValid = isPreReqHierarchyValid(course);
    if (!isValid) return false;
  }

  // No checks have failed! Everything looks good :)
  return true;
};

// A helper method that returns an array key'd off of a course
// number with it's value being a list of direct pre-requisites for the course
const getPreReqsPerCourse = (numCourses, prerequisites) => {
  const prereqsPerCourse = [];

  // No pre-requisites by default, initialize empty arrays
  // for each courses pre-requisites
  for (let course = 0; course < numCourses; course++) {
    prereqsPerCourse[course] = [];
  }

  // Add a new pre-requisite to the course for each relationship
  for (let i = 0; i < prerequisites.length; i++) {
    const [course, preReq] = prerequisites[i];
    prereqsPerCourse[course].push(preReq);
  }

  return prereqsPerCourse;
};

console.log(canFinish(2, [[1, 0]])); // There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible. => true
console.log(
  canFinish(2, [
    [1, 0],
    [0, 1],
  ])
); // There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible. => false
