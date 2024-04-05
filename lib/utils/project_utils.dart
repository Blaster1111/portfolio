class ProjectUtils {
  final String image;
  final String title;
  final String subtitle;
  final int node;
  final int mongo;
  final int flutter;
  final int firebase;

  ProjectUtils({
    required this.image,
    required this.title,
    required this.subtitle,
    required this.node,
    required this.mongo,
    required this.firebase,
    required this.flutter,
  });
}

// WORK PROJECTS
List<ProjectUtils> workProjectUtils = [
  ProjectUtils(
    image: 'assets/projects/1.png',
    title: 'ToDo (Backend)',
    subtitle:
        'Made an Efficient task management with Node.js-powered todo backend',
    node: 1,
    flutter: 0,
    firebase: 0,
    mongo: 1,
  ),
  ProjectUtils(
    image: 'assets/projects/02.png',
    title: 'Rakshak Reet',
    subtitle:
        'Rakshak Reet: Empowering police officials with comprehensive feedback analysis and interactive graphs for enhanced station performance.',
    flutter: 1,
    node: 0,
    mongo: 0,
    firebase: 1,
  ),
  ProjectUtils(
    image: 'assets/projects/03.png',
    title: 'Hotelify',
    subtitle: "Crafting hotel app UIs seamlessly through REST API integration.",
    flutter: 1,
    firebase: 1,
    mongo: 0,
    node: 0,
  ),
  ProjectUtils(
    image: 'assets/projects/04.png',
    title: 'Chatting App',
    subtitle: 'Developed a fullstack chatting app using socket.io in flutter',
    flutter: 1,
    node: 1,
    mongo: 1,
    firebase: 0,
  ),
];
