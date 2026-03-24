#include <stdio.h>

int main() {
    int choice;
    int answer;
    int score = 0;
    int highscore;
    char username[50];
    FILE *file;

    printf("===== QUIZ GAME =====\n");
    printf("Enter your name: ");
    scanf("%s", username);

    printf("\n1. Start Quiz\n");
    printf("2. Exit\n");
    printf("Enter your choice: ");
    scanf("%d", &choice);

    if(choice == 2) {
        printf("Goodbye %s!\n", username);
        return 0;
    }

    // Questions
    printf("\nQ1: What is the capital of Canada?\n");
    printf("1. Toronto\n2. Ottawa\n3. Vancouver\n4. Montreal\n");
    scanf("%d", &answer);
    if(answer == 2) score++;

    printf("\nQ2: Which language is used for Arduino?\n");
    printf("1. Python\n2. Java\n3. C/C++\n4. HTML\n");
    scanf("%d", &answer);
    if(answer == 3) score++;

    printf("\nQ3: 5 + 3 = ?\n");
    printf("1. 6\n2. 8\n3. 9\n4. 7\n");
    scanf("%d", &answer);
    if(answer == 2) score++;

    printf("\nQ4: Which is an operating system?\n");
    printf("1. Windows\n2. Keyboard\n3. Mouse\n4. Printer\n");
    scanf("%d", &answer);
    if(answer == 1) score++;

    printf("\nQ5: How many bits in 1 byte?\n");
    printf("1. 4\n2. 16\n3. 8\n4. 2\n");
    scanf("%d", &answer);
    if(answer == 3) score++;

    printf("\n%s, Your Final Score: %d/5\n", username, score);

    // File handling for high score
    file = fopen("highscore.txt", "r");
    if(file != NULL) {
        fscanf(file, "%d", &highscore);
        fclose(file);
    } else {
        highscore = 0;
    }

    if(score > highscore) {
        printf("Congratulations! New High Score!\n");
        file = fopen("highscore.txt", "w");
        fprintf(file, "%d", score);
        fclose(file);
    } else {
        printf("High Score: %d\n", highscore);
    }
float percentage = (score / 5.0) * 100;
printf("Percentage: %.2f%%\n", percentage);

if(score == 5) {
    printf("Excellent!\n");
} else if(score >= 3) {
    printf("Good Job!\n");
} else {
    printf("Keep Practicing!\n");
}
    return 0;
}