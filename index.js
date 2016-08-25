
exerciseRoutine (() => { 
  console.log('Stretch! work that core!');
});

function morningRoutine(exercise) {
  var breakfast = null;

  if (exercise === liftWeights) {
    breakfast = 'protein bar';
  } else if (exercise === swimFortyLaps) {
    breakfast = 'kale smoothie';
  } else {
    breakfast = 'granola';
  }

  exerciseRoutine(exercise);

  return function() {
    console.log('Nom nom nom, this ${breakfast} is delicious!');
  };
}

var afterExercise = morningRoutine(liftWeights);

afterExercise();
