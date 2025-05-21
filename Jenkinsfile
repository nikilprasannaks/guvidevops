pipeline {
    agent any

    environment {
        DOCKER_CREDENTIALS = credentials('cred-1')  // Docker Hub Credentials ID
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Java Build') {
            steps {
                sh "mvn clean"
                sh "mvn install"
            }
        }

        stage('Build Java Docker Image') {
            steps {
                script {
                    sh 'docker build -t pavishkumar/guvidevopswarsday1 .'
                }
            }
        }

        stage('Push Java Image to Docker Hub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'cred-1') {
                        sh 'docker push pavishkumar/guvidevopswarsday1'
                    }
                }
            }
        }

        stage('Build and Test React App in Docker') {
            steps {
                sh 'docker build -t react-app-test .'
                sh 'docker run --rm react-app-test'
            }
        }
    }

    post {
        always {
            echo 'Tests completed.'
        }
        success {
            echo 'Tests passed!'
        }
        failure {
            echo 'Tests failed!'
        }
    }
}
