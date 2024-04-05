import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:portfolio/constants/colors.dart';

class MainMobile extends StatelessWidget {
  const MainMobile({super.key});

  @override
  Widget build(BuildContext context) {
    final screenSize = MediaQuery.of(context).size;
    final screenWidth = screenSize.width;
    final screenHeight = screenSize.height;
    return Container(
      margin: const EdgeInsets.symmetric(
        horizontal: 40.0,
        vertical: 30.0,
      ),
      height: screenHeight,
      constraints: BoxConstraints(
        minHeight: 560.0,
      ),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.start,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          //avatar img
          ShaderMask(
            shaderCallback: (bounds) {
              return LinearGradient(
                colors: [
                  CustomColor.scaffoldBg.withOpacity(0.3),
                  CustomColor.scaffoldBg.withOpacity(0.3),
                ],
              ).createShader(bounds);
            },
            blendMode: BlendMode.srcATop,
            child: Image.asset(
              "assets/my_flutter_avatar.png",
              height: screenHeight / 2.5,
              width: screenWidth,
            ),
          ),
          SizedBox(
            height: 30.0,
          ),
          //intro text
          const Text(
            "Hi,\nI'm Rudra Shukla\nA Full Stack App Developer",
            style: TextStyle(
              fontWeight: FontWeight.bold,
              fontSize: 24.0,
              height: 1.5,
              color: CustomColor.whitePrimary,
            ),
          ),
          SizedBox(
            height: 15.0,
          ),
          SizedBox(
            width: 190,
            child: ElevatedButton(
              style: ButtonStyle(
                backgroundColor:
                    MaterialStateProperty.all(CustomColor.yellowPrimary),
              ),
              onPressed: () {},
              child: Text(
                "Get Resume",
                style: TextStyle(
                    color: CustomColor.whitePrimary,
                    fontWeight: FontWeight.bold),
              ),
            ),
          ),
          //btn
        ],
      ),
    );
  }
}
