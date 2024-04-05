import 'package:flutter/cupertino.dart';
import 'package:portfolio/constants/colors.dart';

class Footer extends StatelessWidget {
  const Footer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(vertical: 20.0),
      width: double.maxFinite,
      child: Center(
        child: const Text(
          "Made by Rudra Shukla with Flutter 3.19.5",
          style: TextStyle(
            fontWeight: FontWeight.w400,
            color: CustomColor.whiteSecondary,
          ),
        ),
      ),
    );
  }
}
