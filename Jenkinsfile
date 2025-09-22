pipeline {
    agent any

    environment {
        SLACK_WEBHOOK = 'https://hooks.slack.com/services/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'
    }

    stages {
        stage('Checkout Code') {
            steps {
                echo 'Checking out code from Git...'
                checkout scm
            }
        }

        stage('Deploy/Update Site') {
            steps {
                echo 'Simulating deploy/update site...'
            }
        }
    }

    post {
        success {
            echo 'Pipeline succeeded!'
            sh """
                curl -X POST -H 'Content-type: application/json' \
                --data '{
                    "text": "Jenkins job *${env.JOB_NAME}* build #${env.BUILD_NUMBER} succeeded!"
                }' ${SLACK_WEBHOOK}
            """
        }

        failure {
            echo 'Pipeline failed!'
            sh """
                curl -X POST -H 'Content-type: application/json' \
                --data '{
                    "text": "Jenkins job *${env.JOB_NAME}* build #${env.BUILD_NUMBER} failed. Check: ${env.BUILD_URL}"
                }' ${SLACK_WEBHOOK}
            """
        }
    }
}
